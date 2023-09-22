import React, { useState, useEffect } from 'react';
import Images from './Images';
import SearchBar from './SearchBar';
import Loading from './Loading';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import image2 from '../images/photo-1695018128519-bced2bac1b71.avif'
import image3 from '../images/cow.avif'
import image4 from '../images/city.webp'
import people from '../images/people.jpg'
import plant from '../images/plants.avif'
import winter from '../images/winter.avif'
import art from '../images/art.avif'
import dog from '../images/dog.avif'

import nature from '../images/forest1.avif'



function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate fetching images from an API (replace with actual API call)
    setTimeout(() => {
      const fetchedImages = [
        { id: '1', src: people, tag: 'People' },
        { id: '2', src: image2 , tag: 'City' },
        { id: '3', src: image3 , tag: 'Cow' },
        { id: '4', src: image4 , tag: 'City' },
        { id: '5', src: plant , tag: 'Plant' },
        { id: '6', src: winter , tag: 'Winter' },
        { id: '7', src: art , tag: 'Art' },
        { id: '8', src: dog , tag: 'Dog' },
        { id: '9', src: nature , tag: 'Nature' },
        

        
      ];
      setImages(fetchedImages);
      setLoading(false);
    }, 2000);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    // Reorder the images based on the drag-and-drop result
    const reorderedImages = [...images];
    const [reorderedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedImage);

    // Update the state with the new order of images
    setImages(reorderedImages);

    

  
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className='flex justify-center mb-8'>
        <h1 className='text-3xl font-bold'>Welcome to the Art Gallery</h1>
        </div>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Loading />
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="images">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="container mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {images
                  .filter((image) =>
                    image.tag.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((image, index) => (
                    <Images key={image.id} image={image} index={index} />
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
}

export default Gallery;
