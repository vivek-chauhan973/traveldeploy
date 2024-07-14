import Image from 'next/image'
import { useState, ChangeEvent, FormEvent } from 'react';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [imagePath, setImagePath] = useState('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!selectedFile) {
      setMessage('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    if (response.ok) {
      setMessage(result.message);
      setImagePath(result.path);
    } else {
      setMessage(`Upload failed: ${result.error}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      {imagePath && (
        <div>
          <h3>Uploaded Image:</h3>
          <Image src={imagePath} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

