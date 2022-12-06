import React from 'react';
import { Button } from '@mui/material';

const Projects = () => {
    return (
        <div>
            <Button href='projects/mysupersecretproject'>MY SUPER SECRET PROJECT</Button>
            <Button href='/projects/mysupersecretfile'>My SUPER SECRET FILE</Button>
        </div>
    );
};

export default Projects;
