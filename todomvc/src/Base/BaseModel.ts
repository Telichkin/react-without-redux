export default class {
    protected views: React.Component[];

    constructor() { this.views = []; }

    subscribe(view: React.Component) {
        this.views.push(view);
        view.setState({});
    }

    unsubscribe(view: React.Component) {
        const index = this.views.indexOf(view);
        if (index !== -1) { this.views.splice(index, 1); }
    }

    protected updateViews() {
        this.views.forEach((view: React.Component) => view.setState({}))
    }
}