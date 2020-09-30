(vlu-add-test
 (defun atom-test ( / a b)
   (setq a '(x y z))
   (setq b 'a)
   (vlu-assert     (atom 'a))
   (vlu-assert-not (atom a))
   (vlu-assert     (atom 'b))
   (vlu-assert     (atom b))
   (vlu-assert-not (atom '(a b c)))))

(vlu-add-test
 (defun not-test ()
   (vlu-assert     (not nil))
   (vlu-assert-not (not t))
   (vlu-assert-not (not 0))
   (vlu-assert-not (not 0.0))
   (vlu-assert-not (not ""))
   (vlu-assert-not (not 'foo))
   (vlu-assert     (not '()))
   (vlu-assert-not (not '(1 2 3)))
   (vlu-assert-not (not '(1 . 2)))))

(vlu-add-test
 (defun null-test ()
   (vlu-assert     (null nil))
   (vlu-assert-not (null t))
   (vlu-assert-not (null 0))
   (vlu-assert-not (null 0.0))
   (vlu-assert-not (null ""))
   (vlu-assert-not (null 'foo))
   (vlu-assert     (null '()))
   (vlu-assert-not (null '(1 2 3)))
   (vlu-assert-not (null '(1 . 2)))))
