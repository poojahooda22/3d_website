import {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';


const Computers = () => {

    const computer = useGLTF('/models/computer.glb');
    return (
        <div>Computers</div>
    )
}

export default Computers;