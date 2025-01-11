
import * as React from "react";

export interface INewsSectionProps {}

export default function NewsSection(props: INewsSectionProps) {
 
  return (
    <div style={{ width: '100%', marginTop: '10px', all: 'unset' }}>
    
      <div
        id="brandpush-trust-badge"
        style={{
          position: 'relative',
          width: '100%',
          background: 'transparent',
          borderRadius: '10px',
          minHeight: '180px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingBottom: '12px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '0px 5px 10px 5px',
            fontSize: '18px',
            fontFamily: 'sans-serif',
            fontWeight: 600,
            letterSpacing: '8px',
            lineHeight: 1.3,
          }}
        >
          <div style={{ height: '58px' }}>
            <span
              className="brandpush-title"
              style={{ zIndex: 1, position: 'relative', padding: '0 20px', margin: 0, color: '#0e0e0e' }}
            >
              AS SEEN ON
            </span>
          </div>
          <div className="brandpush-logo-container">
            <img
              className="brandpush-leaf"
              alt="Trust Reef"
              style={{
                position: 'absolute',
                height: '110px',
                left: '25px',
                margin: 0,
                padding: 0,
                zIndex: 0,
                opacity: 0.2,
              }}
              src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fb10293-8878-4ce5-5496-cef376fe9300/public"
            />
            <img
              className="brandpush-leaf"
              alt="Trust Reef"
              style={{
                position: 'absolute',
                height: '110px',
                right: '25px',
                margin: 0,
                padding: 0,
                zIndex: 0,
                opacity: 0.2,
                transform: 'scaleX(-1)',
              }}
              src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fb10293-8878-4ce5-5496-cef376fe9300/public"
            />
            <div className="brandpush-logo-container-item">
              <div className="brandpush-vertical-center">
                {[
                  {
                    href: 'https://markets.businessinsider.com/news/stocks/shpper-surpasses-10-000-trips-expands-global-reach-through-peer-to-peer-shipping-1034191901',
                    src: 'https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/1ec59321-8e61-4837-f6be-dfc708214e00/public',
                    alt: 'Featured on Business Insider',
                  },
                  {
                    href: 'https://apnews.com/press-release/marketersmedia/united-arab-emirates-khalid-alqasim-email-e6f3a842b9edbf7432474c0a0052aaa7',
                    src: 'https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/58504989-f608-481b-f90d-7effda94b900/public',
                    alt: 'Featured on Associated Press',
                  },
                  {
                    href: 'https://www.theglobeandmail.com/investing/markets/markets-news/Plentisoft/30295908/shpper-surpasses-10000-trips-expands-global-reach-through-peer-to-peer-shipping/',
                    src: 'https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/1e747439-950b-4509-2a80-f0a08b7cad00/public',
                    alt: 'Featured on The Globe And Mail',
                  },
                  {
                    href: 'https://www.streetinsider.com/Evertise+Financial/Shpper+Surpasses+10%2C000+Trips%2C+Expands+Global+Reach+Through+Peer-to-Peer+Shipping/24188782.html',
                    src: 'https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/88b67e99-320d-4465-b159-1f7ff354e900/public',
                    alt: 'Featured on Street Insider',
                  },
                  {
                    href: 'https://www.digitaljournal.com/pr/news/vehement-media/shpper-surpasses-10-000-trips-expands-1118646143.html',
                    src: 'https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/1abe2c5f-dfc9-4eb2-b14d-8a23db746800/public',
                    alt: 'Featured on Digital Journal',
                  },
                  {
                    href: 'https://www.benzinga.com/pressreleases/25/01/42892562/shpper-surpasses-10-000-trips-expands-global-reach-through-peer-to-peer-shipping',
                    src: 'https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/43cf2388-c45d-4d19-f9ee-568268159a00/public',
                    alt: 'Featured on Benzinga',
                  },
                ].map((logo, index) => (
                  <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer" className="brandpush-newslogos">
                    <img
                      alt={logo.alt}
                      className="brandpush-news-logo"
                      style={{ marginRight: '14px' }}
                      src={logo.src}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}