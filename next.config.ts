import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer'

const nextConfig: NextConfig = {
  /* config options here */
  turbopack:{
    root: __dirname,
  },
  experimental:{
    
  }
  
}

export default withContentlayer(nextConfig);
