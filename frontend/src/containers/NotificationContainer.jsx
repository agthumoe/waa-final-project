import Notification from '../components/Notification';
import useNotificationStore from '../hooks/useNotificationStore';

const NotificationContainer = () => {
  const { notifications, remove } = useNotificationStore();

  return (
    <div className="fixed top-5 right-5 w-96 z-50">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          message={notification.message}
          type={notification.type}
          remove={remove}
        />
      ))}
    </div>
  );
};

export default NotificationContainer;
