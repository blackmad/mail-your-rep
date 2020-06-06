import React, { useState } from 'react';
import { templatesCollection } from './firebase';
import { Template } from './types';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";


const Home = () => {
    const [ templates, setTemplates ] = useState([] as Template[])

    templatesCollection.get().then((docs) => {
        setTemplates(docs.docs.map(doc => {
            return {...doc.data(), id: doc.id} as Template;
        }));
    });

    return (
        <Container>
            <h1>Active Campaigns</h1>
            {templates.map(template => {
                const pathname = "/card/" + template.id;
                return <Link to={pathname}>{template.name}</Link>;
            })}
        </Container>
    );
}

export default Home;
