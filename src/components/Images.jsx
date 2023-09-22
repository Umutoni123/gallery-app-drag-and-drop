import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function Images({ image, index }) {
  return (
    <Draggable draggableId={image.id} index={index}>
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`rounded-lg overflow-hidden shadow-md transition-transform ${
        snapshot.isDragging ? 'scale-105' : ''
      }`}
    >
      <img src={image.src} alt={`Image ${image.id}`} className="w-full h-auto" />

      <div className="p-2 bg-white">
        <p className="text-gray-600 text-sm">{image.tag}</p>
      </div>
    </div>
  )}
</Draggable>

  );
}

export default Images;
