import './MyLabel.css';

interface MyLabelProps {
  /**
   *
   * Text to display
   */
  label: string;
  /**
   * Size of the label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Whether to capitalize the label
   */
  allCaps?: boolean;
  /**
   * Color of the label
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * Font color of the label
   */
  fontColor?: string;
}

export const MyLabel = ({ label, size = 'normal', allCaps = false, color = 'text-primary', fontColor = '' }: MyLabelProps) => {
  return <span
    className={`label ${size} ${color}`} style={fontColor ? { color: fontColor } : undefined}
  >
    {allCaps ? label.toUpperCase() : label}
  </span>;
};
