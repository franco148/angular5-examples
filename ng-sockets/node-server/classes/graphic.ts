export class GraphicData {
    private months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    private values: number[] = [1, 2, 3, 4, 5, 6, 7];

    constructor() {}

    getGraphicData() {
        return [
            { data: this.values, label: 'Sales' }
        ];
    }

    increaseValue(month: string, value: number) {
        month = month.toLowerCase().trim();
        for (const index in this.months) {
            if (this.months[index] === month) {
                this.values[index] += value;
            }
        }

        return this.getGraphicData();
    }
}