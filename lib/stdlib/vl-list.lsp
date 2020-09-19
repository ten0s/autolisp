;; > (vl-remove 1 (list))
;; nil
;; > (vl-remove 1 (list 1 2 3 4 1))
;; (2 3 4)
;; > (vl-remove 1 (list 1 2 3 1))
;; (2 3)
;; > (vl-remove 2 (list 1 2 3 1))
;; (1 3 1)
;;> (vl-remove 4 (list 1 2 3 1))
;; (1 2 3 1)
(defun vl-remove (elm lst)
  (if (null lst) nil
    (if (equal elm (car lst)) (vl-remove elm (cdr lst))
      (cons (car lst)
            (vl-remove elm (cdr lst))))))
