import * as React from 'react';

export default function Apple({ className }) {
    return (
        <svg className={className + " h-5 w-5"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.152 6.896c-0.948 0-2.415-1.078-3.96-1.040-2.040 0.027-3.91 1.183-4.961 3.014-2.117 3.675-0.546 9.103 1.519 12.090 1.013 1.454 2.208 3.090 3.792 3.039 1.52-0.065 2.090-0.987 3.935-0.987 1.831 0 2.35 0.987 3.96 0.948 1.637-0.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-0.039-0.013-3.182-1.221-3.22-4.857-0.026-3.040 2.48-4.494 2.597-4.559-1.429-2.090-3.623-2.324-4.39-2.376-2-0.156-3.675 1.090-4.61 1.090zM15.53 3.83c0.843-1.012 1.4-2.427 1.245-3.83-1.207 0.052-2.662 0.805-3.532 1.818-0.78 0.896-1.454 2.338-1.273 3.714 1.338 0.104 2.715-0.688 3.559-1.701z"></path>
        </svg>
    );
}
