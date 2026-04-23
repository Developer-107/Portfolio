
export default function BackgroundLayer() {
    return (
        <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
                backgroundImage: `url('/images/Background.jpg')`,
                backgroundColor: '#10052e',
            }}
        />
    );
}
