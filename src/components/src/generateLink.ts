export const generateLink = () => {
    const characters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
    let link = '';
    while(link.length < 7){
        link += characters[Math.floor(Math.random()* characters.length)]
    }

    return link;
}