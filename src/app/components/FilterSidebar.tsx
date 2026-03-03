import { Slider } from '../components/ui/slider';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';

interface FilterSidebarProps {
  onFilterChange?: (filters: any) => void;
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  return (
    <div className="w-full md:w-72 bg-white border-r border-black/10 p-6 space-y-8">
      <div>
        <h3 className="font-semibold mb-4">Region</h3>
        <div className="space-y-3">
          {['Europe', 'Asia', 'North America', 'South America', 'Africa', 'Oceania'].map((region) => (
            <div key={region} className="flex items-center gap-2">
              <Checkbox id={region} />
              <Label htmlFor={region} className="cursor-pointer">{region}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Altitude Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[0, 8000]}
            max={8849}
            step={100}
            className="mb-2"
          />
          <div className="flex justify-between text-sm opacity-60">
            <span>0m</span>
            <span>8,849m</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Season</h3>
        <div className="space-y-3">
          {['Spring', 'Summer', 'Autumn', 'Winter'].map((season) => (
            <div key={season} className="flex items-center gap-2">
              <Checkbox id={season} />
              <Label htmlFor={season} className="cursor-pointer">{season}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Minimum Rating</h3>
        <div className="px-2">
          <Slider
            defaultValue={[4]}
            max={5}
            step={0.5}
            className="mb-2"
          />
          <div className="flex justify-between text-sm opacity-60">
            <span>0★</span>
            <span>5★</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Orientation</h3>
        <div className="space-y-3">
          {['Landscape', 'Portrait', 'Square'].map((orientation) => (
            <div key={orientation} className="flex items-center gap-2">
              <Checkbox id={orientation} />
              <Label htmlFor={orientation} className="cursor-pointer">{orientation}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Color Tone</h3>
        <div className="space-y-3">
          {['Warm', 'Cool', 'Neutral'].map((tone) => (
            <div key={tone} className="flex items-center gap-2">
              <Checkbox id={tone} />
              <Label htmlFor={tone} className="cursor-pointer">{tone}</Label>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full py-3 bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1A1A1A] transition-colors">
        Apply Filters
      </button>
    </div>
  );
}
