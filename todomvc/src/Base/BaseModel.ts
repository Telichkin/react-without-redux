export default class {
    protected views: React.Component[];

    constructor() { this.views = []; }

    subscribe(view: React.Component) {
        this.views.push(view);
        view.setState({});
    }

    unsubscribe(view: React.Component) {
        this.views = this.views.filter((item: React.Component) => item !== view);
    }

    protected updateViews() {
        this.views.forEach((view: React.Component) => view.setState({}))
    }
}