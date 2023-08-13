"use client"

import {  useRouter } from "next/navigation"



const currentPagePath = '/'; // Replace this with the actual pathname of the current page
  const pages = [
    { title: 'Home', path: '/' },
    { title: 'Watch', path: '/watch' },
    { title: 'Contact', path: '/contact' },
  ];





export default function WatchList() {
  const router = useRouter();
}
