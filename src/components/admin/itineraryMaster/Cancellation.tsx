import { MdOutlineAddCircle, MdDeleteForever } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';










// Dynamic import for Quill.js
const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

const Cancellation = () => {
    const [CancellationGroup, setCancellationGroup] = useState({ groupName: "", description: "" });
    const [groupsData, setGroupsData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [deleteGroupId, setDeleteGroupId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editGroupId, setEditGroupId] = useState(null);
    const [selectedGroupName, setSelectedGroupName] = useState(""); // State to store the currently selected group name

    useEffect(() => {
        fetchGroups();
    }, []);

    const fetchGroups = async () => {
        try {
            const response = await fetch('/api/package/tour-info/cancellation/get');
            const result = await response.json();
            setGroupsData(result.CancellationGroupData);
        } catch (error) {
            console.error("Error fetching groups:", error);
        }
    };

    const toggleModal = (id = null) => {
        setIsOpen(!isOpen);
        setDeleteGroupId(id);
    };

    const handleDelete = async () => {
        if (deleteGroupId) {
            try {
                const response = await fetch('/api/package/tour-info/cancellation/delete', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ group_id: deleteGroupId })
                });

                if (response.ok) {
                    fetchGroups();
                    setIsOpen(false);
                } else {
                    console.error('Failed to delete group');
                }
            } catch (error) {
                console.error('Error deleting group:', error);
            }
        }
        toast.success("Deleted successfully !", {
            position: "top-center"
        });

    };

    const handleEdit = (id) => {
        const group = groupsData.find(group => group._id === id);
        setCancellationGroup({ groupName: group.groupName, description: group.description });
        setSelectedGroupName(group.groupName); // Update the selected group name
        setIsEditing(true);
        setEditGroupId(id);
    };

    const handleSave = async () => {
        const url = isEditing
            ? '/api/package/tour-info/cancellation/edit'
            : '/api/package/tour-info/cancellation/add';
        const payload = isEditing
            ? { group_id: editGroupId, ...CancellationGroup }
            : CancellationGroup;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                fetchGroups();
                setCancellationGroup({ groupName: '', description: '' });
                setIsEditing(false);
                setEditGroupId(null);
            } else {
                console.error('Failed to save group');
            }
        } catch (error) {
            console.error('Error saving group:', error);
        }
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link']
        ]
    };

    return (
        <div >
            <div className="md:flex gap-5">

                <div className=" grow border rounded p-4 h-72">
                    <div className='flex flex-col'>
                        <label className="pb-2 font-semibold">Tour Cancellation</label>
                        <div className="flex items-center gap-5">
                            <input
                                className='border rounded-md h-8 px-2 grow focus:border-primary outline-none'
                                type="text"
                                value={CancellationGroup.groupName}
                                onChange={(e) => setCancellationGroup({ ...CancellationGroup, groupName: e.target.value })}
                                placeholder="Enter Group Name"
                            />
                            <button type="button" onClick={handleSave}>
                                <MdOutlineAddCircle size={35} className='cursor-pointer hover:text-primary' />
                            </button>
                        </div>
                    </div>
                    <div className="py-2 px-4 h-48 overflow-y-auto">
                        {groupsData.map((group, index) => (
                            <div key={group._id} className="flex justify-between items-center gap-10 even:bg-slate-100 hover:bg-slate-300 cursor-pointer">
                                <p className='capitalize leading-8'>{index + 1}. {group.groupName}</p>
                                <div className='flex gap-2'>
                                    {(isEditing && editGroupId === group._id) ? (
                                        <MdDeleteForever size={24} className='mt-1 opacity-50 cursor-not-allowed' />
                                    ) : (
                                        <MdDeleteForever onClick={() => toggleModal(group._id)} size={24} className='mt-1 hover:text-red-500 cursor-pointer' />
                                    )}
                                    <LiaUserEditSolid onClick={() => handleEdit(group._id)} size={24} className={`mt-1 ${isEditing ? (editGroupId === group._id ? 'text-gray-500 cursor-not-allowed' : 'hover:text-red-500 cursor-pointer') : ''}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grow mt-2 md:mt-0">

                    {isEditing && (
                        <div>
                            {/* Display the currently selected group name */}
                            <p className="font-semibold">Group : {selectedGroupName}</p>
                            <div className='w-full  h-[225px]'>
                                <QuillNoSSRWrapper
                                    className='rounded h-[100%]'
                                    theme="snow"
                                    value={CancellationGroup.description}
                                    onChange={(html) => setCancellationGroup({ ...CancellationGroup, description: html })}
                                    modules={modules}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={`${isEditing ? "block" : 'hidden'} col-span-2 mt-16 md:mt-8`}>
                <button onClick={handleSave} className=" w-full bg-black text-white p-2 mt-2">Save Information</button>
            </div>
            {isOpen &&

                (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="bg-white p-8 rounded-[20px]  shadow-lg z-50">
                            <h2 className="text-xl font-semibold  text-center justify-center mb-3">Delete policy</h2>
                            <p className="text-center justify-center ">Are you sure you want to delete this item</p>
                            <div className="flex justify-center mt-4">
                                <button onClick={() => toggleModal(null)} className="mr-5 bg-gray-500 hover:bg-gray-700 text-white font-normal py-3 px-8 rounded-[25px] ">
                                    Cancel
                                </button>
                                <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-normal py-3 px-8 rounded-[25px] ">
                                    Delete
                                </button>

                            </div>
                        </div>
                    </div>

                )}
                <ToastContainer/>
        </div>
    );
};

export default Cancellation;
