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
  /**
   * Background color of the label
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = false,
  color = 'text-primary',
  fontColor = '',
  backgroundColor = 'transparent',
}: MyLabelProps) => {
  return <span
    className={`label ${size} ${color}`} style={{ color: fontColor, backgroundColor }}
  >
    {allCaps ? label.toUpperCase() : label}
  </span>;
};
