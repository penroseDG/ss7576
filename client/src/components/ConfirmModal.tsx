interface ConfirmModal {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}
export default function ConfirmModal(message:any, onConfirm:any, onCancel:any) {
  return (
    <div className="confirm-modal">
      <p>{message}</p>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}
