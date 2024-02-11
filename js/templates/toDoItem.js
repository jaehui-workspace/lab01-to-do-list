/* 
     template is JSX  

     React Component 
     jsx + data
*/
import { toElement } from './../utils/toElement';

function toDoItemTemplate(todo, status, category, start, finished) {
    const template = `
    <section class="my-2">
        <ul class="max-w-xs flex flex-col">
            <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
                <b>To Do:</b> ${todo}
            </li>
            <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
                <b>Status:</b> ${status}
            </li>
            <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
                <b>Category:</b> ${category}
            </li>
            <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
                <b>Start:</b> ${start}
            </li>
            <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
                <b>Finished:</b> ${finished}
            </li>
        </ul>
    </section>
    `;

    return toElement(template);
}

export { toDoItemTemplate };
