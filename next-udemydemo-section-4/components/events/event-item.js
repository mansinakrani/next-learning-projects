import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import Button from '../ui/button';

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
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={Styles.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={Styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={Styles.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;