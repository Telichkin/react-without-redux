import * as React from "react";
import BaseModel from "./BaseModel";

export default class<Model extends BaseModel, Props> extends React.Component<Props & {model: Model}, {}> {
    protected model: Model;

    constructor(props: any) {
        super(props);
        this.model = props.model
    }
    
    componentWillMount() { this.model.subscribe(this); }

    componentWillUnmount() { this.model.unsubscribe(this); }
}