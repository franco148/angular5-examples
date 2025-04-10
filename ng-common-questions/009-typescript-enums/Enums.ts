// What are enums in Typescript?
// - Q1: What is an enum?
// - Q2: Write an enum example
// - Q3: Why are they so good?

export enum StatusEnum {
    ACTIVE = 'active',
    DRAFT = 'draft',
    ARCHIVED = 'archived'
}

const isActive = (status: StatusEnum): boolean => {
    return status === StatusEnum.ACTIVE;
}
