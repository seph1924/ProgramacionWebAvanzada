export interface Component {
    render(): string;

}

export class Footer implements Component {
    constructor(public text: string) {}
    render(): string {
        return `<footer>Aprende a Tu Manera ISIL</footer>`;
    }
}
