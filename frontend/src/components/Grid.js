import React from "react";

const Grid = ({ photos }) => {
    return (
        <>
            <h1>PicturePort</h1>
            <div className="grid">
                {photos.map(({ photo, _id }) => (
                    <div key={_id} className="grid__item">
                        <img
                            src={`http://localhost:5000/uploads/${photo}`}
                            alt="Images"
                            download
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Grid;