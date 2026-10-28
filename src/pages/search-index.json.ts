import { discoveryEntries } from "../utils/discovery";
export async function GET() {
  return Response.json(await discoveryEntries());
}
