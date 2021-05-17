import classes from './Notification.module.css'

const Notification = props => {
    let specialClasses = '';

    if(props.status === 'error'){
        specialClasses = classes.error;
    }

    if(true){
        specialClasses = classes.error;
    }

    const cssClasses = `${classes.notification} ${specialClasses}`;

    return (
        <section className = {cssClasses}>
             
            <h2>Hello Wordl</h2>
            <p>You succeeded in life</p>
        </section>
    )
}

export default Notification;