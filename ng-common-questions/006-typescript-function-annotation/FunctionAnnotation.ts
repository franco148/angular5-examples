// Create function annotation in Typescript
// Q1: Create a UserInterface with id: string, name: string, age: number
// and method getMessage that returns string.
// Q2: Create ProfileInterface with name, profileUrl, isActive
// Q3: Create function which transforms UserInterface to ProfileInterface.
// The profileUrl is /profile/${name}
// Q4: Add optional parameter isActive. Profile must be active if parameter
// is not provided

export interface UserInterface {
    id: string;
    name: string;
    age: number;

    getMessage(): string;
}

export interface ProfileInterface {
    name: string;
    profileUrl: string;
    isActive: boolean;
}

const transformUserToProfile = (user: UserInterface, isActive: boolean = true): ProfileInterface => {
    return {
        name: user.name,
        profileUrl: `/profiles/${user.name}`,
        isActive, 
    }
};

transformUserToProfile({
    id: '1',
    name: 'Foo',
    age: 30,
    getMessage: () => 'Foooo'
});