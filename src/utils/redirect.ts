 'use server';
import {redirect as direct} from 'next/navigation';

export default async function redirect(path: string) {
    direct(path);
}