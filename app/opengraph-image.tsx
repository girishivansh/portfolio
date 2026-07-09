import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Shivansh Giri Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #030014, #1E1A33)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 100, fontWeight: 'bold', display: 'flex', marginBottom: 20 }}>
          <span style={{ color: '#E0E0E0' }}>&lt;SG /&gt;</span>
        </div>
        <div style={{ fontSize: 60, fontWeight: 'bold', display: 'flex' }}>
          Shivansh Giri
        </div>
        <div style={{ fontSize: 35, color: '#A0A0A0', display: 'flex', marginTop: 20 }}>
          Full Stack Developer & DSA Enthusiast
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
