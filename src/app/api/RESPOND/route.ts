import { NextRequest, NextResponse  } from "next/server";



export async function GET (req: NextRequest) {

    if (req.geo?.region && req.geo?.city) {
        console.log(req.geo.region, req.geo.city);
        return NextResponse.json({ region: req.geo.region, city: req.geo.city });
        
    };

    return NextResponse.json({ region: "unknown", city: "unknown" });

}