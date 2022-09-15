import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import IMG_1 from "../../icons/bck_img.jpg";
import IMG_2 from "../../icons/Kengoo-1.jpg";
import {
    AlbumBTN,
    AlbumPosition
} from './Album.styled';


const Album = () => {
    const [toggler, setToggler] = useState(false);
    return (
        <AlbumPosition>
            <AlbumBTN onClick={ () => setToggler(!toggler) }>
                Альбом <br/>(тицяй)
            </AlbumBTN>
            <FsLightbox
                toggler={ toggler }
                sources={[
                    'https://i.imgur.com/fsyrScY.jpg',
                    IMG_1,
                    IMG_2,
                    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                ] }
            />
        </AlbumPosition>
    )
};

export default Album;