interface Notification {
    message: string;
    type: 'success' | 'error' | 'info';
}
export default function Notification(message:any, type:any) {
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  )
}
