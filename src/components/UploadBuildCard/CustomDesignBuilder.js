import React,{useEffect} from 'react';
import {Container} from "@material-ui/core";
import UploadBuildCardHeader from "../UploadBuildCardHeader/UploadBuildCardHeader"
import cardBuilderSteeper from "../../handlers/CardBuilderSteeper";


const BUILDER_CLASS = "body--card-builder";
const CustomDesignBuilder = props => {

    useEffect(() =>{
        document.body.classList.add(BUILDER_CLASS);
        return ()=> {
            document.body.classList.remove(BUILDER_CLASS)
        }
    });
    return (
        <>
            <UploadBuildCardHeader/>
            <Container maxWidth="lg">
                {cardBuilderSteeper(props.step,props)}
               
            </Container>

        </>);
};

export default CustomDesignBuilder;