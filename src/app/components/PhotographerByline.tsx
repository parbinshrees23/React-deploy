interface PhotographerBylineProps {
  name: string;
  avatar: string;
  size?: 'sm' | 'md' | 'lg';
}

export function PhotographerByline({ name, avatar, size = 'md' }: PhotographerBylineProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className="flex items-center gap-2">
      <img
        src={avatar}
        alt={name}
        className={`${sizeClasses[size]} rounded-full object-cover`}
      />
      <span className={`${textSize[size]} opacity-70`}>by {name}</span>
    </div>
  );
}
