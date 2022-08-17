import Link from 'next/link';

import Styles from './event-item.module.css';

function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleTimeString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const formattedAddress = location.replace(', ', '\n');
      const exploreLink = `/events/${id}`;
    
    return (
        <li className={Styles.item}>
            <img src={'/' + image} alt={title}/>
            <div className={Styles.content}>
                <div className={Styles.summary}>
                    <h2>{title}</h2>
                    <div className={Styles.date}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={Styles.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={Styles.actions}>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    );
}

export default EventItem;