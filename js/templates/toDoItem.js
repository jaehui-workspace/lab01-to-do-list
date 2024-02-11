/* 
     template is JSX  

     React Component 
     jsx + data
*/
import { toElement } from './../utils/toElement';

function toDoItemTemplate(todo, status, category, start, finished) {
    const template = `
    <section class="my-4">
        <div class="flex flex-col justify-center bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-t-blue-500 dark:shadow-slate-700/[.7]">
            <div class="p-4 md:p-5">
                <div class="border-b">
                    <h3 class="text-lg mb-4 font-bold text-blue-600 dark:text-white">
                        ${todo}
                    </h3>
                </div>
                <div class="pt-3">
                    <ul role="list" class="marker:text-blue-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-white">
                        <li>
                            <b>Status:</b> ${status}
                        </li>
                        <li>
                            <b>Category:</b> ${category}
                        </li>
                        <li>
                            <b>Start:</b> ${start}
                        </li>
                        <li>
                            <b>Due Date:</b> ${finished}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;

    return toElement(template);
}

export { toDoItemTemplate };
