import { landingContent } from "@/lib/landing-content";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function SubmittedModal({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <h3>{landingContent.modal.title}</h3>
        <p>{landingContent.modal.message}</p>
        <button className="btn btn-primary" onClick={onClose} type="button">{landingContent.modal.button}</button>
      </div>
    </div>
  );
}

