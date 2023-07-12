import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '../../../models/Post';
 
export async function GET(req) {
    try{
        await connect();
        const post = await Post.find({});
        return new NextResponse(JSON.stringify(post), {status: 200});
    } catch(err) {
        return new NextResponse("Database Error", {status: 500});
    }
}