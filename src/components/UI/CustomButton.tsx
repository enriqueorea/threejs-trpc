import Link from 'next/link';
import type {FC, CSSProperties} from 'react'
import { useUIStore } from '~/store';

interface ICustomButton {
    customClass?: string;
    onClick: () => void;
    title: string
    type: ButtonTypes;
    href: string;
}
export type ButtonTypes = 'filled' | 'outlined' | 'text';
export type ButtonsDict = {
    [key in ButtonTypes]: CSSProperties
}

export const CustomButton : FC<ICustomButton> = ({title, onClick, type, customClass = '',href}) => {

    const {color} = useUIStore();

    const generateStyle = (type: ButtonTypes) : CSSProperties => {
        const buttonsDict : ButtonsDict = {
            'filled': {
                color: 'white',
                backgroundColor: color,
            },
            'outlined': {},
            'text': {}
        }
        return buttonsDict[type];
    }
  return (
    <Link href={href} >
        <button onClick={onClick}  className={`px-2 py-1.5 flex-1 rounded-md ${customClass}`} style={generateStyle(type)} >
        {title}
    </button>
    </Link>
  )
}
