export const generateIdentifier = () => {
    const characters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
    let identifier = '';
    while(identifier.length < 7){
        identifier += characters[Math.floor(Math.random()* characters.length)]
    }

    return identifier;
}