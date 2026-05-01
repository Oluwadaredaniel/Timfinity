import { motion } from 'framer-motion'
import {
  FaGoogle, FaFacebookF, FaInstagram,
} from 'react-icons/fa'
import {
  SiShopify, SiWoocommerce, SiTiktok,
  SiHubspot, SiMailchimp, SiGoogleanalytics,
} from 'react-icons/si'
import './LogoStrip.css'

const logos = [
  { icon: <FaGoogle size={18} />, label: 'Google Ads' },
  { icon: <FaFacebookF size={18} />, label: 'Meta Ads' },
  { icon: <FaInstagram size={18} />, label: 'Instagram Ads' },
  { icon: <SiShopify size={18} />, label: 'Shopify' },
  { icon: <SiTiktok size={18} />, label: 'TikTok Ads' },
  { icon: <SiWoocommerce size={18} />, label: 'WooCommerce' },
  { icon: <SiHubspot size={18} />, label: 'HubSpot' },
  { icon: <SiMailchimp size={18} />, label: 'Mailchimp' },
  { icon: <SiGoogleanalytics size={18} />, label: 'GA4' },
]

export default function LogoStrip() {
  const doubled = [...logos, ...logos]

  return (
    <div className="logo-strip">
      <p className="strip-label">Platforms & Tools I Work With</p>
      <div className="strip-track-wrapper">
        <div className="strip-fade strip-fade--left" />
        <div className="strip-overflow">
          <motion.div
            className="strip-track"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
          >
            {doubled.map((l, i) => (
              <div key={i} className="strip-item">
                <span className="strip-icon">{l.icon}</span>
                <span className="strip-name">{l.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="strip-fade strip-fade--right" />
      </div>
    </div>
  )
}