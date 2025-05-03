import React from 'react';

type CategoryChipListProps = {
    items: string[];
}
function CategoryChipList({ items }: CategoryChipListProps) {
    return (
        <section className='mx-auto max-w-6xl py-4'>
            <div className="flex flex-wrap gap-3">
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-orange-100 text-yellow-800 text-sm font-medium shadow-md rounded-full 
                     hover:bg-orange-200 hover:scale-105 hover:shadow-md 
                     transition-transform duration-200 ease-in-out cursor-pointer"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default CategoryChipList;
