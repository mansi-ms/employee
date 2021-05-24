export const designations = ["Project Manager", "Production Manager", "General Manager", "HR Director", "Senior Editor", "Editor", "Dummy Position 1", "Dummy Position 2", "Dummy Position 3"]

export class Employee {
    fullName: string;
    address: string;
    phoneNumber: number;
    position: string;

    constructor(obj) {
        this.fullName = obj.fullName;
        this.address = obj.address;
        this.phoneNumber = obj.phoneNumber;
        if (!(isNaN(obj.position))) {
            this.position = designations[obj.position - 1];
        } else {
            this.position = obj.position;
        }

    }
}
