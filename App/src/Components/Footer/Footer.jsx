import React from 'react';
import styles from './footerBeauty.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h2>BoutiqueName</h2>
          <p>Discover the latest trends in fashion with BoutiqueName. We offer a wide range of stylish and affordable clothing, accessories, and more.</p>
          /* hello */
        </div>
        <div className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
            <li><a href="/sale">Sale</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h2>Contact Us</h2>
          <p>Email: info@boutiquename.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Boutique St, Fashion City, 12345</p>
        </div>
        <div className={styles.social}>
          <h2>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPinterest} /></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 BoutiqueName. All rights reserved. This site is maintained by Rashmi.</p>
      </div>
    </footer>
  );
}

