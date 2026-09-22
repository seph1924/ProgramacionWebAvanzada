export class Button {
    constructor(public label: string) {}

    onclick(): void {
    console.log(`Has presionado el botón: ${this.label}`);
    }

    render(): string {
        return `<button id="saveBtn">${this.label}</button>`;
    }
}
