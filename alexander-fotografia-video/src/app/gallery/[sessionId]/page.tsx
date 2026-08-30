import GalleryComponent from "@/components/GaleryComponent";

export default async function GalleryPage({ params }: Readonly<{ params: Promise<{ sessionId: string }> }>) {
  const { sessionId } = await params;
  return <GalleryComponent sessionId={sessionId} />;
}
