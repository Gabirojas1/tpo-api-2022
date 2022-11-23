import React from 'react';
import './Footer.css';
import '../../App.css';
import { Button } from '../Button/Button';
import Link from '@mui/material/Link';
import SchoolIcon from '@mui/icons-material/School';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Recibi nuestras ultimas novedades en tu correo
        </p>
        <p className='footer-subscription-text'>
          Podes cancelar la suscripción en cualquier momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu Email'
            />
            <Button buttonStyle='btn--outline'>Subscribite</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link href="https://www.instagram.com">Instagram</Link>
            <Link href="https://www.facebook.com">Facebook</Link>
            <Link href="https://www.youtube.com">Youtube</Link>
            <Link href="https://www.twitter.com">Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Tusclases.com
              <SchoolIcon></SchoolIcon>
            </Link>
          </div>
          <small class='website-rights'>Tusclases.com © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              href="https://www.facebook.com"
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              href="https://www.instagram.com"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              href="https://www.youtube.com"
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              href="https://www.twitter.com"
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              href="https://www.linkedin.com"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;