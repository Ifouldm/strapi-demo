// prettier-ignore
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export function useDateFormat(dateIn: string): string {
    const date = new Date(dateIn);
    return `${date.getDay() + 1} ${
        months[date.getMonth()]
    } ${date.getFullYear()}`;
}
