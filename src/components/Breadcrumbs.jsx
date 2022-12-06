import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();

    const { pathname } = location;
    const pathnames = pathname.split('/').filter(x => x);

    return (
        <MUIBreadcrumbs separator="›" aria-label="breadcrumb">
            <Link href='/'>root</Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                return (
                    <Link href={routeTo} key={name}>{name}</Link>
                );
            })}
        </MUIBreadcrumbs>
    );
};

export default Breadcrumbs;
